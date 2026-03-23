import { WEEKS, SESSION_SKELETON, type WeekPlan } from '../data/weeks'

export type GeneratorInput = {
  siteName: string
  leaderName: string
  gradeBand: '2-4' | '5-6' | '7-8'
  weekFocus: number
  conflicts: string
  trustedAdultLabel: string
  includeZh: boolean
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

export function buildPack(input: GeneratorInput) {
  const week = weekByNum(input.weekFocus)
  const customScenarios = splitLines(input.conflicts)
  const scenarios =
    customScenarios.length > 0
      ? customScenarios
      : week.scenarios

  const gradeNote =
    input.gradeBand === '2-4'
      ? 'Use very short phrases, visuals on posters, and more movement.'
      : input.gradeBand === '5-6'
        ? 'Allow slightly longer debriefs; keep phrases still under 10 words.'
        : 'Use teen-relevant examples; co-create norms before role-plays.'

  const sessionRunsheet = {
    header: `${input.siteName} — Week ${week.week}: ${week.title}`,
    leader: input.leaderName,
    gradeBand: input.gradeBand,
    gradeNote,
    skeleton: SESSION_SKELETON,
    week,
    scenarios,
    trustedAdult: input.trustedAdultLabel,
  }

  const parentEn = {
    title: `This week at school: ${week.title}`,
    lead: `We practiced saying feelings clearly and asking for help from ${input.trustedAdultLabel}.`,
    tryAtHome: [
      'Pick one calm moment (after snack or dinner).',
      'Ask: “What was one feeling word you used today?”',
      'Model the phrase yourself once: “I feel ___ because ___.”',
      'If your child is upset, name the body signal first (“hands tight”), then the feeling.',
    ],
    phrases: week.mantraEn,
    scenarios: scenarios.slice(0, 3),
  }

  const parentZh = input.includeZh
    ? {
        title: `本周在校主题：${week.title}`,
        lead: `我们在练习把感受说清楚，并在需要时向「${input.trustedAdultLabel}」求助。`,
        tryAtHome: [
          '选一个平静的时间（点心后或晚饭后）。',
          '问孩子：「今天你用到了哪个感受词？」',
          '家长示范一次：「我现在感到 ___，因为 ___。」',
          '如果孩子激动，先描述身体信号（手很紧），再说感受词。',
        ],
        phrases: week.mantraZh,
        scenarios: scenarios.slice(0, 3),
      }
    : null

  const observation = {
    title: 'After-session educator check (60 seconds)',
    items: [
      'Participation overall (low / mixed / high)',
      'Did you hear a target phrase used spontaneously?',
      'Which scenario card felt “not like our class”?',
      'One tweak for next week (wording, order, or grouping)',
    ],
  }

  return { sessionRunsheet, parentEn, parentZh, observation, week }
}
