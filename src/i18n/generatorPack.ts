import type { Lang } from './types'

const observation = {
  en: {
    title: 'After-session educator check (60 seconds)',
    items: [
      'Participation overall (low / mixed / high)',
      'Did you hear a target phrase used spontaneously?',
      'Which scenario card felt “not like our class”?',
      'One tweak for next week (wording, order, or grouping)',
    ],
  },
  zh: {
    title: '课后教育者快速检查（约 60 秒）',
    items: [
      '整体参与度（低 / 混合 / 高）',
      '是否听到学生自发使用目标句式？',
      '哪张情境卡「不像我们班」？',
      '下周一处微调（措辞、顺序或分组）',
    ],
  },
} as const

const gradeNotes = {
  en: {
    '2-4':
      'Use very short phrases, visuals on posters, and more movement.',
    '5-6': 'Allow slightly longer debriefs; keep phrases still under 10 words.',
    '7-8': 'Use teen-relevant examples; co-create norms before role-plays.',
  },
  zh: {
    '2-4': '句子极短；海报配图；多动一动。',
    '5-6': '复盘可稍长；句式仍控制在 10 个词以内。',
    '7-8': '用青少年熟悉例子；角色扮演前共同制定规范。',
  },
} as const

const parentTryHome = {
  en: [
    'Pick one calm moment (after snack or dinner).',
    'Ask: “What was one feeling word you used today?”',
    'Model the phrase yourself once: “I feel ___ because ___.”',
    'If your child is upset, name the body signal first (“hands tight”), then the feeling.',
  ],
  zh: [
    '选一个平静的时间（点心后或晚饭后）。',
    '问孩子：「今天你用到了哪个感受词？」',
    '家长示范一次：「我现在感到 ___，因为 ___。」',
    '如果孩子激动，先描述身体信号（手很紧），再说感受词。',
  ],
} as const

const parentLead = {
  en: (trusted: string) =>
    `We practiced saying feelings clearly and asking for help from ${trusted}.`,
  zh: (trusted: string) =>
    `我们在练习把感受说清楚，并在需要时向「${trusted}」求助。`,
}

const parentTitle = {
  en: (weekTitle: string) => `This week at school: ${weekTitle}`,
  zh: (weekTitle: string) => `本周在校主题：${weekTitle}`,
}

const sessionHeader = {
  en: (site: string, weekNum: number, weekTitle: string) =>
    `${site} — Week ${weekNum}: ${weekTitle}`,
  zh: (site: string, weekNum: number, weekTitle: string) =>
    `${site} — 第 ${weekNum} 周：${weekTitle}`,
}

type BlockLang = 'en' | 'zh'

export function getGeneratorPackStrings(lang: Lang) {
  const ui: BlockLang = lang === 'zh' ? 'zh' : 'en'
  return {
    gradeNote: (band: '2-4' | '5-6' | '7-8') => gradeNotes[ui][band],
    observation: observation[ui],
    sessionHeader: (site: string, weekNum: number, weekTitle: string) =>
      sessionHeader[ui](site, weekNum, weekTitle),
    parent: (block: BlockLang) => ({
      tryAtHome: [...parentTryHome[block]],
      title: (weekTitle: string) => parentTitle[block](weekTitle),
      lead: (trusted: string) => parentLead[block](trusted),
    }),
  }
}
