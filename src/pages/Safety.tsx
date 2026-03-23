import { PageHeader } from '../components/PageHeader'
import { IconShield } from '../components/icons'

export function Safety() {
  return (
    <div className="max-w-3xl">
      <PageHeader
        eyebrow="Trust"
        title="Safety, scope & ethics"
        description="Same-Week Bridge provides skill-building ideas for educators. It does not provide therapy, diagnosis, or crisis intervention."
      />

      <div className="space-y-6">
        <section className="rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 to-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
              <IconShield className="size-5" />
            </span>
            <div>
              <h2 className="font-display text-lg font-semibold text-stone-900">
                What this toolkit is
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-stone-700">
                <li>Short, repeatable social-emotional language practice in group settings.</li>
                <li>Optional bilingual parent summaries aligned with weekly class goals.</li>
                <li>Reflection prompts to support educator-led iteration.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-red-200/70 bg-red-50/40 p-6 shadow-sm">
          <h2 className="font-display text-lg font-semibold text-red-950">What it is not</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-red-950/90">
            <li>Not a substitute for school counselors, psychologists, or clinical services.</li>
            <li>Not for collecting sensitive trauma narratives from minors.</li>
            <li>Not a crisis service — if someone is at risk, follow your institution’s protocol.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="font-display text-lg font-semibold text-stone-900">
            Facilitator responsibilities
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-stone-700">
            <li>
              A designated staff member from the host organization should be present and
              responsible for safeguarding.
            </li>
            <li>
              If a student discloses abuse, self-harm, or harm to others, defer immediately to
              trained professionals per local policy.
            </li>
            <li>Obtain whatever consent your school or nonprofit requires before running a pilot.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-6 shadow-sm">
          <h2 className="font-display text-lg font-semibold text-amber-950">
            Crisis resources (United States)
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-medium text-amber-950">
            <li>
              <strong>988</strong> — Suicide & Crisis Lifeline (call or text).
            </li>
            <li>
              <strong>911</strong> — Medical or safety emergencies.
            </li>
          </ul>
          <p className="mt-4 text-sm text-amber-900/80">
            Add your district’s mandated reporter guidance and local hotlines to printed packets
            for families.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-stone-50/60 p-6">
          <h2 className="font-display text-lg font-semibold text-stone-900">Data & privacy</h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-700">
            The iteration log stores notes in your browser only. Do not enter student names or
            identifiable information. Use cohort-level descriptions instead.
          </p>
        </section>

        <section className="rounded-2xl border border-bridge-200 bg-bridge-50/40 p-6">
          <h2 className="font-display text-lg font-semibold text-bridge-900">AI use (future modules)</h2>
          <p className="mt-3 text-sm leading-relaxed text-bridge-950/90">
            If you later connect generative AI helpers, keep humans in the loop: educators should
            review every scenario before use, and AI outputs should never override safeguarding
            policies.
          </p>
        </section>
      </div>
    </div>
  )
}
