import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { en } from './en'
import { zh } from './zh'
import { deepGet } from './tPath'
import type { Lang } from './types'

const STORAGE_KEY = 'swb-lang'

const dict = { en, zh } as const

type TPath = string

type I18nValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (path: TPath) => string
}

const I18nContext = createContext<I18nValue | null>(null)

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  try {
    const s = localStorage.getItem(STORAGE_KEY)
    if (s === 'zh' || s === 'en') return s
  } catch {
    /* ignore */
  }
  if (navigator.language?.toLowerCase().startsWith('zh')) return 'zh'
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = l === 'zh' ? 'zh-Hans' : 'en'
  }, [])

  const t = useCallback(
    (path: TPath) => {
      const fromLang = deepGet(dict[lang], path)
      if (fromLang) return fromLang
      const fallback = deepGet(dict.en, path)
      return fallback ?? path
    },
    [lang],
  )

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

/** Hook colocated with provider; fast-refresh rule expects components-only files. */
// eslint-disable-next-line react-refresh/only-export-components -- useI18n pairs with I18nProvider
export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
