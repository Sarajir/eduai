/**
 * Printable "two viewpoints" discussion scaffold.
 */

import type { Lang } from '../i18n/types'

export type PerspectiveInput = {
  unitTitle: string
  scenario: string
  gradeBand: '2-4' | '5-6' | '7-8'
  labelA: string
  labelB: string
}

const bandLanguage = {
  en: {
    '2-4': 'Use simple sentences; offer sentence stems; act out with toys or role cards.',
    '5-6': 'Use role cards; emphasize curiosity over verdict; avoid public shaming.',
    '7-8': 'Normalize mixed feelings; connect to digital communication and group chats.',
  },
  zh: {
    '2-4': '句子简单；提供句式支架；可用玩具或角色卡表演。',
    '5-6': '用角色卡；强调好奇而非裁决；避免公开羞辱。',
    '7-8': '正常化复杂感受；可联系线上交流与群聊情境。',
  },
} as const

const defaultScenario = {
  en: '(Describe the peer conflict or misunderstanding here.)',
  zh: '（在此描述同伴冲突或误解，保持中性。）',
}

const defaultTitle = {
  en: 'Perspective discussion cards',
  zh: '视角讨论卡',
}

const footer = {
  en: 'Same-Week Bridge · Perspective Lab · For facilitated discussion only · Educator-reviewed language',
  zh: 'Same-Week Bridge · 视角实验室 · 仅用于有带领的讨论 · 语言经教育者审阅',
}

export function buildPerspectivePack(input: PerspectiveInput, lang: Lang) {
  const L = lang === 'zh' ? 'zh' : 'en'
  const scenario =
    input.scenario.trim() || defaultScenario[L]

  const discussionQuestions =
    L === 'zh'
      ? [
          `${input.labelA} 可能注意到、而 ${input.labelB} 不那么强调的一个事实是什么？`,
          `${input.labelB} 可能注意到、而 ${input.labelA} 不那么强调的一个事实是什么？`,
          '若两人都希望班级感到安全，他们可以共同说出的一个目标是什么？',
          '双方各可以用一句怎样的话来暂停冲突？',
          '若谈话后情绪仍很激动，学生可以找哪位可信成人或走哪条流程？',
        ]
      : [
          `What is one fact ${input.labelA} might notice that ${input.labelB} does not emphasize?`,
          `What is one fact ${input.labelB} might notice that ${input.labelA} does not emphasize?`,
          'If both people want the class to feel safe, what is one shared goal they could name?',
          'What is a respectful sentence each side could say to pause the conflict?',
          'Who is a trusted adult or process students can use if feelings stay hot after the talk?',
        ]

  const stems =
    L === 'zh'
      ? {
          a: [
            `从 ${input.labelA} 的角度看，当下最重要的事是……`,
            `${input.labelA} 可能感到 ___，因为 ___`,
          ],
          b: [
            `从 ${input.labelB} 的角度看，当下最重要的事是……`,
            `${input.labelB} 可能感到 ___，因为 ___`,
          ],
        }
      : {
          a: [
            `From ${input.labelA}’s angle, the most important thing happening is…`,
            `${input.labelA} might feel ___ because ___`,
          ],
          b: [
            `From ${input.labelB}’s angle, the most important thing happening is…`,
            `${input.labelB} might feel ___ because ___`,
          ],
        }

  const facilitatorScript =
    L === 'zh'
      ? [
          '中性朗读情境。第一轮不设「坏人」——只谈视角。',
          `第一轮：小组只用句架梳理 ${input.labelA} 的看法。`,
          `第二轮：切换；梳理 ${input.labelB} 的看法。`,
          '第三轮：全班用桥接问题讨论，记录共识与下一步。',
          '若涉及身份相关的伤害，按学校调查流程升级——本工具不能替代调查或咨询。',
        ]
      : [
          'Read the scenario neutrally. No villain in round one—only perspectives.',
          `Round 1: Small groups only map ${input.labelA}’s view using the stems.`,
          `Round 2: Switch; map ${input.labelB}’s view.`,
          'Round 3: Whole group uses bridge questions. Capture agreements and next steps.',
          'If the scenario touches identity-based harm, escalate to your school protocol—this tool is not a substitute for investigation or counseling.',
        ]

  return {
    title: input.unitTitle.trim() || defaultTitle[L],
    scenario,
    bandLanguage: bandLanguage[L][input.gradeBand],
    labels: { a: input.labelA, b: input.labelB },
    stems,
    discussionQuestions,
    facilitatorScript,
    footer: footer[L],
  }
}
