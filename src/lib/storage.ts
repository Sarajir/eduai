export type LogEntry = {
  id: string
  date: string
  week: number
  participation: 'low' | 'mixed' | 'high'
  heardTargetPhrase: boolean
  stickyMoment: string
  changeForNext: string
}

const KEY = 'swb-iteration-log-v1'

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

export function loadLog(): LogEntry[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as LogEntry[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveLog(entries: LogEntry[]) {
  localStorage.setItem(KEY, JSON.stringify(entries))
}

export function addLogEntry(
  partial: Omit<LogEntry, 'id'>,
): LogEntry[] {
  const next: LogEntry = { ...partial, id: uid() }
  const all = [next, ...loadLog()]
  saveLog(all)
  return all
}

export function deleteLogEntry(id: string): LogEntry[] {
  const all = loadLog().filter((e) => e.id !== id)
  saveLog(all)
  return all
}

export function exportLogJson(): string {
  return JSON.stringify(loadLog(), null, 2)
}
