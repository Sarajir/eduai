import { PageHeader } from '../components/PageHeader'

const steps = [
  {
    title: '打开 GitHub Pages 设置',
    body: (
      <>
        进入仓库{' '}
        <a
          href="https://github.com/Sarajir/eduai/settings/pages"
          className="font-semibold text-bridge-700 underline-offset-2 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Settings → Pages
        </a>
        。
      </>
    ),
  },
  {
    title: '选择 GitHub Actions 作为来源',
    body: (
      <>
        在 <strong>Build and deployment</strong> 中，将 <strong>Source</strong> 设为{' '}
        <strong>GitHub Actions</strong>（不要选 Deploy from a branch 的{' '}
        <code className="rounded bg-stone-200/80 px-1.5 py-0.5 text-sm">gh-pages</code>，除非你
        自行改了工作流）。
      </>
    ),
  },
  {
    title: '等待首次构建',
    body: (
      <>
        打开 <strong>Actions</strong> 标签，查看 <strong>Deploy to GitHub Pages</strong> 是否成功。
        第一次大约 1–3 分钟。
      </>
    ),
  },
  {
    title: '如遇权限错误',
    body: (
      <>
        在 <strong>Settings → Actions → General</strong> 检查{' '}
        <strong>Workflow permissions</strong>，并确认 <strong>Pages</strong> 已启用。
      </>
    ),
  },
]

export function HostingGuide() {
  return (
    <div className="max-w-3xl space-y-12">
      <PageHeader
        eyebrow="Hosting"
        title="如何把网站发布到 GitHub Pages"
        description={
          <>
            仓库{' '}
            <a
              href="https://github.com/Sarajir/eduai"
              className="font-semibold text-bridge-700 underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Sarajir/eduai
            </a>
            。配置完成后，每次推送到 <code className="rounded bg-stone-200 px-1.5 py-0.5 text-sm">main</code>{' '}
            都会自动构建并更新线上站点。
          </>
        }
      />

      <section className="rounded-3xl border border-bridge-200 bg-gradient-to-br from-bridge-50 via-white to-bridge-50/30 p-8 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-bridge-900">上线后的地址</h2>
        <p className="mt-2 text-sm text-stone-600">项目站（示例）：</p>
        <p className="mt-2 break-all rounded-xl bg-white/80 px-4 py-3 font-mono text-sm font-medium text-stone-900 ring-1 ring-bridge-100">
          https://sarajir.github.io/eduai/
        </p>
        <p className="mt-3 text-sm text-stone-600">
          子路由示例：{' '}
          <span className="break-all font-mono text-xs text-stone-800">
            https://sarajir.github.io/eduai/generator
          </span>
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-stone-900">第一次发布：四步</h2>
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
        <h2 className="font-display text-xl font-semibold text-stone-900">以后怎么更新</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-stone-700">
          <li>在本地修改代码。</li>
          <li>
            在项目根目录执行：
            <pre className="mt-3 overflow-x-auto rounded-xl bg-stone-900 p-4 text-sm text-stone-100">
              {`git add -A
git commit -m "Describe your change"
git push origin main`}
            </pre>
          </li>
          <li>
            推送后等待 Actions 绿勾，然后刷新{' '}
            <span className="font-mono text-stone-800">https://sarajir.github.io/eduai/</span>。
          </li>
        </ol>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-stone-50/80 p-6">
        <h2 className="font-display text-xl font-semibold text-stone-900">本地预览（带 /eduai/ 前缀）</h2>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">
          开发时 <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs ring-1 ring-stone-200">npm run dev</code>{' '}
          使用根路径。要模拟线上：
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-stone-900 p-4 text-sm text-stone-100">
          npm run build
npm run preview
        </pre>
        <p className="mt-3 text-sm text-stone-600">
          打开终端提示的地址，并访问{' '}
          <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs ring-1 ring-stone-200">/eduai/</code>。
        </p>
      </section>

      <section className="rounded-2xl border border-amber-200/70 bg-amber-50/40 p-6">
        <h2 className="font-display text-xl font-semibold text-amber-950">若你改了仓库名</h2>
        <p className="mt-2 text-sm leading-relaxed text-amber-950/90">
          构建默认使用仓库名 <strong>eduai</strong> 作为路径前缀。若重命名仓库，请同步修改{' '}
          <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs">vite.config.ts</code>{' '}
          中的 <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs">repoName</code>
          ，否则静态资源会 404。
        </p>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 text-sm text-stone-600 shadow-sm">
        <p className="font-display font-semibold text-stone-900">English summary</p>
        <p className="mt-3 leading-relaxed">
          Enable <strong>Settings → Pages → Source: GitHub Actions</strong> on{' '}
          <a
            href="https://github.com/Sarajir/eduai"
            className="font-semibold text-bridge-700 underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Sarajir/eduai
          </a>
          . Pushes to <code className="rounded bg-stone-100 px-1 font-mono text-xs">main</code> run{' '}
          <code className="rounded bg-stone-100 px-1 font-mono text-xs">.github/workflows/deploy-pages.yml</code>,
          uploading <code className="rounded bg-stone-100 px-1 font-mono text-xs">dist</code> (with{' '}
          <code className="rounded bg-stone-100 px-1 font-mono text-xs">404.html</code> for SPA routes)
          to GitHub Pages. Live URL:{' '}
          <span className="font-mono text-stone-800">https://sarajir.github.io/eduai/</span>
        </p>
      </section>
    </div>
  )
}
