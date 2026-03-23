import { WEEKS, type WeekPlan } from '../data/weeks'
import { getSessionSkeleton, localizeWeek } from '../data/weekLocale'
import { getGeneratorPackStrings } from '../i18n/generatorPack'
import type { Lang } from '../i18n/types'

export type GeneratorInput = {
  siteName: string
  leaderName: string
  gradeBand: '2-4' | '5-6' | '7-8'
  weekFocus: number
  conflicts: string
  trustedAdultLabel: string
  /** Adds the other-language parent one-pager after the primary. */
  includeBilingualParent: boolean
}

function splitLines(text: string): string[] {
  return text
    .split(/[\n,，;；]+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 8)
}

function weekByNum(n: number): WeekPlan {
  return WEEKS.find((w) => w.week === n) ?? WEEKS[0]
}

export type ParentBlock = {
  title: string
  lead: string
  tryAtHome: string[]
  phrases: string[]
  scenarios: string[]
  lang: 'en' | 'zh'
}

function buildParentBlock(
  week: WeekPlan,
  trusted: string,
  blockLang: 'en' | 'zh',
  scenarios: string[],
  gp: ReturnType<typeof getGeneratorPackStrings>,
): ParentBlock {
  const p = gp.parent(blockLang)
  return {
    title: p.title(week.title),
    lead: p.lead(trusted),
    tryAtHome: p.tryAtHome,
    phrases: blockLang === 'en' ? week.mantraEn : week.mantraZh,
    scenarios: scenarios.slice(0, 3),
    lang: blockLang,
  }
}

export function buildPack(input: GeneratorInput, lang: Lang) {
  const gp = getGeneratorPackStrings(lang)
  const baseWeek = weekByNum(input.weekFocus)
  const week = localizeWeek(baseWeek, lang)
  const customScenarios = splitLines(input.conflicts)
  const scenarios =
    customScenarios.length > 0 ? customScenarios : week.scenarios

  const gradeNote = gp.gradeNote(input.gradeBand)
  const skeleton = getSessionSkeleton(lang)

  const sessionRunsheet = {
    header: gp.sessionHeader(input.siteName, week.week, week.title),
    leader: input.leaderName,
    gradeBand: input.gradeBand,
    gradeNote,
    skeleton,
    week,
    scenarios,
    trustedAdult: input.trustedAdultLabel,
  }

  const primaryLang: 'en' | 'zh' = lang === 'zh' ? 'zh' : 'en'
  const secondaryLang: 'en' | 'zh' = primaryLang === 'zh' ? 'en' : 'zh'

  const parentPrimary = buildParentBlock(
    week,
    input.trustedAdultLabel,
    primaryLang,
    scenarios,
    gp,
  )

  const parentSecondary = input.includeBilingualParent
    ? buildParentBlock(week, input.trustedAdultLabel, secondaryLang, scenarios, gp)
    : null

  return {
    sessionRunsheet,
    parentPrimary,
    parentSecondary,
    observation: gp.observation,
    week,
  }
}
