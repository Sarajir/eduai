/**
 * Rule-based printable pack: "predict → perform → compare" calibration micro-protocol.
 */

import type { Lang } from '../i18n/types'

export type CalibrationInput = {
  cohortLabel: string
  focus: 'math' | 'reading' | 'science' | 'emotion-vocab' | 'mixed'
  gradeBand: '2-4' | '5-6' | '7-8'
  classContext: string
  taskDescription: string
}

const focusLabels = {
  en: {
    math: 'mathematics / problem solving',
    reading: 'reading comprehension',
    science: 'science reasoning',
    'emotion-vocab': 'naming feelings and reactions',
    mixed: 'a short mixed-skills task',
  },
  zh: {
    math: '数学 / 解题',
    reading: '阅读理解',
    science: '科学推理',
    'emotion-vocab': '命名感受与反应',
    mixed: '短时综合技能任务',
  },
} as const

const gradeHints = {
  en: {
    '2-4':
      'Use 1–3 emoji or finger scales; keep language concrete; shorten wait time.',
    '5-6': 'Use a 1–5 scale; invite one-sentence reasons; keep competition low.',
    '7-8': 'Use a 1–5 scale; normalize uncertainty; connect to study strategies.',
  },
  zh: {
    '2-4': '可用 1–3 个表情或手指量表；语言具体；缩短等待时间。',
    '5-6': '用 1–5 分；邀请一句话理由；降低竞争感。',
    '7-8': '用 1–5 分；正常化不确定；连接到学习策略。',
  },
} as const

const researchNote = {
  en: 'Classroom calibration work often follows three beats: students predict how they will do, attempt a bounded task, then compare the prediction with feedback. Studies in K–12 contexts link predictive monitoring practice to stronger metacognitive awareness (effects vary by context; use your own formative evidence).',
  zh: '课堂校准通常包含三步：学生先预测表现，再完成有边界的任务，最后把预测与反馈对照。K–12 研究中「预测性监控」练习与更强的元认知觉察相关（因情境而异；请用你自己的形成性证据）。',
}

const footer = {
  en: 'Same-Week Bridge · Calibration Lab · Educational skill practice only · Not assessment therapy or clinical screening.',
  zh: 'Same-Week Bridge · 校准实验室 · 仅教育技能练习 · 非临床筛查或评估治疗。',
}

export function buildCalibrationPack(input: CalibrationInput, lang: Lang) {
  const L = lang === 'zh' ? 'zh' : 'en'
  const topic = focusLabels[L][input.focus]
  const gradeHint = gradeHints[L][input.gradeBand]
  const placeholderCtx =
    L === 'zh' ? '（请补充你的班级情境）' : '(add your class context)'
  const placeholderTask =
    L === 'zh' ? '（把具体任务写在黑板上）' : '(write your exact task on the board)'

  const facilitatorSteps =
    L === 'zh'
      ? [
          {
            title: '框定（2 分钟）',
            body: `说明目标：我们在练习「校准」——注意自己对表现的感觉与实际有多接近。今日领域：${topic}。你描述的情境：${input.classContext || placeholderCtx}。`,
          },
          {
            title: '预测（3 分钟）',
            body: `任务前，学生私下用 1–5 分预测成功度（或班级等价方式）。可选提问：「哪一步可能绊住你？」将使用的任务：${input.taskDescription || placeholderTask}。`,
          },
          {
            title: '尝试（8–12 分钟）',
            body: '在清晰成功标准下完成任务。保持低赌注；强调从尝试中学习。',
          },
          {
            title: '对照（5 分钟）',
            body: '揭示或讨论正确结果。学生标记高估/低估/差不多。两人一组：「我本该注意哪条线索？」',
          },
          {
            title: '收束（2 分钟）',
            body: '一句带走：「下次我很确定时，我会 ___。」若有人明显不适，私下跟进——按你的保障流程。',
          },
        ]
      : [
          {
            title: 'Frame (2 min)',
            body: `Name the goal: we are practicing “calibration”—noticing how close our feelings about performance match what actually happens. Today’s domain: ${topic}. Context you shared: ${input.classContext || placeholderCtx}.`,
          },
          {
            title: 'Predict (3 min)',
            body: `Before the task, each student privately rates expected success on a 1–5 scale (or your class equivalent). Optional prompt: “What part might trip you up?” Task you will use: ${input.taskDescription || placeholderTask}.`,
          },
          {
            title: 'Perform (8–12 min)',
            body: `Run the task with clear success criteria. Keep stakes low; emphasize learning from the attempt.`,
          },
          {
            title: 'Compare (5 min)',
            body: `Reveal or discuss correct outcomes. Students mark whether they were over-, under-, or well-calibrated. Pair share: “What clue should I have listened to?”`,
          },
          {
            title: 'Close (2 min)',
            body: `One takeaway sentence: “Next time I feel very sure, I will ___.” Debrief privately if anyone feels distressed—follow your safeguarding protocol.`,
          },
        ]

  const slips =
    L === 'zh'
      ? [
          '之前：我的信心 (1–5)：___',
          '之后：实际表现 (1–5)：___',
          '我是：☐ 过于自信 ☐ 过于不自信 ☐ 差不多',
          '下次我会注意的线索：____________________',
        ]
      : [
          'Before: My confidence (1–5): ___',
          'After: How it really went (1–5): ___',
          'I was: ☐ overconfident ☐ underconfident ☐ about right',
          'One clue I will watch next time: ____________________',
        ]

  const cohort = input.cohortLabel || (L === 'zh' ? '试点班级' : 'Pilot cohort')
  const gradeLabel = L === 'zh' ? `适用 ${input.gradeBand.replace('-', '–')} 年级` : `Grades ${input.gradeBand.replace('-', '–')}`

  return {
    title:
      L === 'zh'
        ? `${cohort} · 校准微课堂`
        : `${cohort} · Calibration micro-session`,
    subtitle: `${topic} · ${gradeLabel}`,
    researchNote: researchNote[L],
    gradeHint,
    facilitatorSteps,
    slips,
    footer: footer[L],
  }
}
