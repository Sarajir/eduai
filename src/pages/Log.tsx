import { type FormEvent, useState } from 'react'
import {
  addLogEntry,
  deleteLogEntry,
  exportLogJson,
  loadLog,
  type LogEntry,
} from '../lib/storage'
import { PageHeader } from '../components/PageHeader'
import { IconRefresh } from '../components/icons'

const inputClass =
  'mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-stone-900 shadow-sm outline-none focus:border-bridge-300 focus:ring-2 focus:ring-bridge-500/20'

export function Log() {
  const [entries, setEntries] = useState<LogEntry[]>(() => loadLog())
  const [week, setWeek] = useState(1)
  const [participation, setParticipation] = useState<LogEntry['participation']>('mixed')
  const [heardTargetPhrase, setHeardTargetPhrase] = useState(false)
  const [stickyMoment, setStickyMoment] = useState('')
  const [changeForNext, setChangeForNext] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const date = new Date().toISOString().slice(0, 10)
    const next = addLogEntry({
      date,
      week,
      participation,
      heardTargetPhrase,
      stickyMoment,
      changeForNext,
    })
    setEntries(next)
    setStickyMoment('')
    setChangeForNext('')
  }

  const remove = (id: string) => {
    if (confirm('Delete this entry?')) setEntries(deleteLogEntry(id))
  }

  const download = () => {
    const blob = new Blob([exportLogJson()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `same-week-bridge-log-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Reflection"
        title="Iteration log"
        description="Entries stay in this browser (localStorage). Export JSON before clearing site data or switching devices. Avoid student names—describe cohort-level patterns only."
      />

      <form
        onSubmit={submit}
        className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
          <span className="rounded-lg bg-bridge-100 p-2 text-bridge-700">
            <IconRefresh className="size-5" />
          </span>
          <h2 className="font-display text-lg font-semibold text-stone-900">New session note</h2>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-stone-700">
            Session date
            <input
              type="date"
              readOnly
              className={`${inputClass} bg-stone-50 text-stone-600`}
              value={new Date().toISOString().slice(0, 10)}
            />
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            Week number
            <select
              className={inputClass}
              value={week}
              onChange={(e) => setWeek(Number(e.target.value))}
            >
              {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  Week {n}
                </option>
              ))}
            </select>
          </label>
        </div>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-stone-700">Participation</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {(['low', 'mixed', 'high'] as const).map((p) => (
              <label
                key={p}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold capitalize transition ${
                  participation === p
                    ? 'border-bridge-500 bg-bridge-50 text-bridge-900 shadow-sm'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                }`}
              >
                <input
                  type="radio"
                  name="participation"
                  checked={participation === p}
                  onChange={() => setParticipation(p)}
                  className="sr-only"
                />
                {p}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="mt-6 flex cursor-pointer items-center gap-3 rounded-xl border border-stone-100 bg-stone-50/80 px-4 py-3 text-sm font-semibold text-stone-800">
          <input
            type="checkbox"
            checked={heardTargetPhrase}
            onChange={(e) => setHeardTargetPhrase(e.target.checked)}
            className="size-4 rounded border-stone-300 text-bridge-600"
          />
          Heard a target phrase used spontaneously
        </label>

        <label className="mt-5 block text-sm font-semibold text-stone-700">
          Sticky moment
          <span className="block text-xs font-normal text-stone-500">
            Which scenario or phrase felt off?
          </span>
          <textarea
            required
            rows={2}
            className={inputClass}
            value={stickyMoment}
            onChange={(e) => setStickyMoment(e.target.value)}
          />
        </label>
        <label className="mt-4 block text-sm font-semibold text-stone-700">
          Change for next session
          <textarea
            required
            rows={2}
            className={inputClass}
            value={changeForNext}
            onChange={(e) => setChangeForNext(e.target.value)}
          />
        </label>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-full bg-bridge-600 px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-bridge-500"
          >
            Save entry
          </button>
          <button
            type="button"
            onClick={download}
            className="rounded-full border-2 border-stone-200 bg-white px-7 py-3 text-sm font-bold text-stone-800 hover:border-bridge-300"
          >
            Export JSON
          </button>
        </div>
      </form>

      <section>
        <h2 className="font-display text-xl font-semibold text-stone-900">History</h2>
        {entries.length === 0 ? (
          <div className="mt-6 rounded-3xl border border-dashed border-stone-300 bg-white/60 px-8 py-16 text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-stone-100 text-stone-400">
              <IconRefresh className="size-8" />
            </div>
            <p className="mt-4 font-medium text-stone-700">No entries yet</p>
            <p className="mx-auto mt-2 max-w-sm text-sm text-stone-500">
              After your next session, log what worked and what you would rephrase—small notes
              compound into a strong pilot story.
            </p>
          </div>
        ) : (
          <ul className="mt-6 space-y-4">
            {entries.map((e) => (
              <li
                key={e.id}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-bridge-200/80 hover:shadow-md"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="inline-flex rounded-full bg-bridge-100 px-3 py-0.5 text-xs font-bold text-bridge-900">
                      Week {e.week}
                    </span>
                    <span className="ml-2 text-sm font-semibold text-stone-500">{e.date}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(e.id)}
                    className="text-xs font-bold uppercase tracking-wide text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-semibold capitalize text-stone-700">
                    {e.participation} energy
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      e.heardTargetPhrase
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    Phrase: {e.heardTargetPhrase ? 'heard' : 'not observed'}
                  </span>
                </div>
                <p className="mt-4 text-sm text-stone-700">
                  <span className="font-semibold text-stone-900">Sticky:</span> {e.stickyMoment}
                </p>
                <p className="mt-2 text-sm text-stone-700">
                  <span className="font-semibold text-stone-900">Next tweak:</span>{' '}
                  {e.changeForNext}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
