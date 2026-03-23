import { type FormEvent, useState } from 'react'
import {
  addLogEntry,
  deleteLogEntry,
  exportLogJson,
  loadLog,
  type LogEntry,
} from '../lib/storage'

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
      <div>
        <h1 className="font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
          Iteration log
        </h1>
        <p className="mt-3 max-w-2xl text-stone-600">
          Entries stay in this browser (localStorage). Export JSON before clearing site data
          or switching devices.
        </p>
      </div>

      <form
        onSubmit={submit}
        className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
      >
        <h2 className="font-display text-lg font-semibold text-stone-900">New entry</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-stone-700">
            Session date
            <input
              type="date"
              readOnly
              className="mt-1 w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-stone-600"
              value={new Date().toISOString().slice(0, 10)}
            />
          </label>
          <label className="block text-sm font-medium text-stone-700">
            Week number
            <select
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none ring-bridge-500/30 focus:ring-2"
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
        <fieldset className="mt-4">
          <legend className="text-sm font-medium text-stone-700">Participation</legend>
          <div className="mt-2 flex flex-wrap gap-3">
            {(['low', 'mixed', 'high'] as const).map((p) => (
              <label key={p} className="flex items-center gap-2 text-sm text-stone-800">
                <input
                  type="radio"
                  name="participation"
                  checked={participation === p}
                  onChange={() => setParticipation(p)}
                  className="size-4 text-bridge-600"
                />
                {p}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="mt-4 flex items-center gap-2 text-sm font-medium text-stone-700">
          <input
            type="checkbox"
            checked={heardTargetPhrase}
            onChange={(e) => setHeardTargetPhrase(e.target.checked)}
            className="size-4 rounded border-stone-400 text-bridge-600"
          />
          Heard a target phrase used spontaneously
        </label>
        <label className="mt-4 block text-sm font-medium text-stone-700">
          Sticky moment (which scenario or phrase felt off?)
          <textarea
            required
            rows={2}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none ring-bridge-500/30 focus:ring-2"
            value={stickyMoment}
            onChange={(e) => setStickyMoment(e.target.value)}
          />
        </label>
        <label className="mt-4 block text-sm font-medium text-stone-700">
          Change for next session
          <textarea
            required
            rows={2}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none ring-bridge-500/30 focus:ring-2"
            value={changeForNext}
            onChange={(e) => setChangeForNext(e.target.value)}
          />
        </label>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-full bg-bridge-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-bridge-500"
          >
            Save entry
          </button>
          <button
            type="button"
            onClick={download}
            className="rounded-full border border-stone-300 bg-white px-6 py-2.5 text-sm font-semibold text-stone-800 hover:border-bridge-400"
          >
            Export JSON
          </button>
        </div>
      </form>

      <section>
        <h2 className="font-display text-lg font-semibold text-stone-900">History</h2>
        {entries.length === 0 ? (
          <p className="mt-3 text-sm text-stone-500">No entries yet.</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {entries.map((e) => (
              <li
                key={e.id}
                className="rounded-xl border border-stone-200 bg-white/90 p-4 text-sm shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold text-stone-900">
                    Week {e.week} · {e.date}
                  </span>
                  <button
                    type="button"
                    onClick={() => remove(e.id)}
                    className="text-xs font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
                <p className="mt-2 text-stone-600">
                  Participation: <strong>{e.participation}</strong> · Target phrase heard:{' '}
                  <strong>{e.heardTargetPhrase ? 'yes' : 'no'}</strong>
                </p>
                <p className="mt-2 text-stone-700">
                  <span className="font-medium text-stone-800">Sticky:</span> {e.stickyMoment}
                </p>
                <p className="mt-1 text-stone-700">
                  <span className="font-medium text-stone-800">Next tweak:</span>{' '}
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
