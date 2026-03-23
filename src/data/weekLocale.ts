import type { WeekPlan } from './weeks'
import { PROGRAM_GOAL, SESSION_SKELETON, WEEKS } from './weeks'
import type { Lang } from '../i18n/types'

export const PROGRAM_GOAL_ZH =
  '到第 8 周，多数学生能说出一种感受、使用一句简短「我」陈述，并在教练情境下使用求助或设限句式。'

export const SESSION_SKELETON_ZH = [
  { t: '0–3 分钟', label: '签到', detail: '表情量表或 1–5 手指评分。' },
  { t: '3–8 分钟', label: '热身', detail: '低赌注、需轮流发言的小游戏。' },
  { t: '8–18 分钟', label: '核心技能', detail: '情境 + 1–2 条目标句式。' },
  { t: '18–25 分钟', label: '配对 / 小组', detail: '简单情境 → 较难情境。' },
  { t: '25–30 分钟', label: '收束', detail: '重复「金句」+ 预告下周。' },
] as const

const ZH: Record<
  number,
  { title: string; skills: string; scenarios: string[]; teacherNote: string }
> = {
  1: {
    title: '情绪词汇',
    skills: '把「不开心」细分为生气/难过/紧张等，并与情境对应。',
    scenarios: ['排队时被插队。', '分数比预期低。', '课间朋友和别人玩。'],
    teacherNote: '句子控制在 8 个词以内。示范语气：平静、非表演。',
  },
  2: {
    title: '身体信号',
    skills: '把心跳加快、发热、肌肉紧绷与「情绪警报」连起来。',
    scenarios: ['老师点到自己脑子一片空白。', '要在小组前发言。'],
    teacherNote: '用「定格」游戏：做表情+身体，让别人猜感受。',
  },
  3: {
    title: '同伴摩擦',
    skills: '不带侮辱地提出请求与界限。',
    scenarios: ['排队碰撞。', '不打招呼借文具。', '打断别人说话。'],
    teacherNote: '两人一组：讲述者/倾听者，倾听者只复述听到的内容。',
  },
  4: {
    title: '玩笑与外号',
    skills: '清晰的「停止」句式 + 去找可信成人。',
    scenarios: ['反复嘲笑穿着。', '感觉被冒犯的外号。'],
    teacherNote: '本周事先约定「值班成人」是谁。',
  },
  5: {
    title: '作业卡住',
    skills: '把「问第一步」正常化。',
    scenarios: ['应用题看起来太长。', '小组分工不清楚。'],
    teacherNote: '先表扬「愿意问」的努力，再谈答案是否正确。',
  },
  6: {
    title: '输赢与比赛',
    skills: '祝贺别人 + 对自己说「还能再试」。',
    scenarios: ['体育课输了比赛。', '没被选上角色。'],
    teacherNote: '避免强迫道歉——聚焦具体、尊重的用语。',
  },
  7: {
    title: '综合角色扮演',
    skills: '在一个场景里至少用两条已学句式。',
    scenarios: ['抽两张卡：场景 + 触发。', '中途交换角色。'],
    teacherNote: '计时 90 秒/幕。复盘：「哪句话有帮助？」',
  },
  8: {
    title: '展示与庆祝',
    skills: '30 秒小组剧 + 说出一个可求助的成人。',
    scenarios: ['各组从罐子里挑最喜欢情境。'],
    teacherNote: '可用简单证书或贴纸——仪式感很重要。',
  },
}

export function getProgramGoal(lang: Lang): string {
  return lang === 'zh' ? PROGRAM_GOAL_ZH : PROGRAM_GOAL
}

export function getSessionSkeleton(lang: Lang) {
  return lang === 'zh'
    ? [...SESSION_SKELETON_ZH]
    : SESSION_SKELETON.map((r) => ({ ...r }))
}

export function localizeWeek(week: WeekPlan, lang: Lang): WeekPlan {
  if (lang === 'en') return week
  const z = ZH[week.week]
  if (!z) return week
  return {
    ...week,
    title: z.title,
    skills: z.skills,
    scenarios: z.scenarios,
    teacherNote: z.teacherNote,
  }
}

export function getLocalizedWeeks(lang: Lang): WeekPlan[] {
  return WEEKS.map((w) => localizeWeek(w, lang))
}
