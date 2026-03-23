export type WeekPlan = {
  week: number
  title: string
  skills: string
  mantraEn: string[]
  mantraZh: string[]
  scenarios: string[]
  teacherNote: string
}

export const PROGRAM_GOAL =
  'By week 8, most students can name a feeling, use one short “I” statement, and use one help-seeking or boundary phrase in a coached scenario.'

export const WEEKS: WeekPlan[] = [
  {
    week: 1,
    title: 'Emotion vocabulary',
    skills: 'Expand beyond “upset” into mad / sad / worried; connect words to situations.',
    mantraEn: [
      'I feel ___ because ___.',
      'My face/body felt ___ when that happened.',
    ],
    mantraZh: ['我现在感到 ___，因为 ___。', '那时候我的脸/身体感觉 ___。'],
    scenarios: [
      'Someone took your spot in line.',
      'You got a lower score than you hoped.',
      'A friend played with someone else at recess.',
    ],
    teacherNote:
      'Keep sentences under 8 words. Model tone: calm, not performative.',
  },
  {
    week: 2,
    title: 'Body signals',
    skills: 'Link fast heartbeat, heat, tight muscles to “emotion alarm.”',
    mantraEn: ['I need a minute.', 'I can take three slow breaths before I talk.'],
    mantraZh: ['我需要停一分钟。', '说话前我可以做三次慢呼吸。'],
    scenarios: [
      'Teacher calls on you and your mind goes blank.',
      'You are about to speak in front of the group.',
    ],
    teacherNote: 'Use a quick “freeze frame” game: show face + body, others guess the feeling.',
  },
  {
    week: 3,
    title: 'Peer friction',
    skills: 'Request + boundary without insults.',
    mantraEn: [
      'Please don’t ___. I will ___.',
      'I didn’t like that. Please stop.',
    ],
    mantraZh: ['请不要 ___。我会 ___。', '我不喜欢那样。请停下。'],
    scenarios: ['Bumping in line.', 'Borrowing supplies without asking.', 'Interrupting.'],
    teacherNote: 'Practice pairs: Speaker / Listener. Listener only repeats back what they heard.',
  },
  {
    week: 4,
    title: 'Teasing & nicknames',
    skills: 'Clear stop phrase + go to a trusted adult.',
    mantraEn: [
      'I don’t like that name. Call me ___.',
      'I’m going to get help from ___ now.',
    ],
    mantraZh: ['我不喜欢那个称呼。请叫我 ___。', '我现在去找 ___ 帮忙。'],
    scenarios: ['Repeated jokes about clothes.', 'A nickname that feels mean.'],
    teacherNote: 'Pre-agree who the “on-duty adult” is this week.',
  },
  {
    week: 5,
    title: 'Stuck on work',
    skills: 'Normalize asking for the *first step*.',
    mantraEn: [
      'I’m stuck. Can you show me the first step?',
      'Can I try one idea and check it with you?',
    ],
    mantraZh: ['我卡住了。能提示我第一步吗？', '我想试一个做法，能帮我看看吗？'],
    scenarios: ['Word problem feels too long.', 'Group work role unclear.'],
    teacherNote: 'Praise effort on asking before the answer is correct.',
  },
  {
    week: 6,
    title: 'Winning & losing',
    skills: 'Congratulate + self-talk for retry.',
    mantraEn: [
      'Good game. You worked hard on ___.',
      'I can try again next time.',
    ],
    mantraZh: ['打得很好。你在 ___ 上很努力。', '下次我可以再试一次。'],
    scenarios: ['Lost a game in PE.', 'Did not get picked for a role.'],
    teacherNote: 'Avoid forced “say sorry” — focus on specific respectful words.',
  },
  {
    week: 7,
    title: 'Integration role-play',
    skills: 'Use at least two learned phrases in one scene.',
    mantraEn: ['(Combine week 1–6 cards.)'],
    mantraZh: ['（综合使用第1–6周句式。）'],
    scenarios: ['Draw two cards: setting + trigger.', 'Swap roles halfway.'],
    teacherNote: 'Timer: 90 seconds per scene. Debrief: “What phrase helped?”',
  },
  {
    week: 8,
    title: 'Showcase & celebration',
    skills: 'Public 30-second skit + name one adult they would go to.',
    mantraEn: ['I practiced “Say-It” skills for 8 weeks.'],
    mantraZh: ['我练习了 8 周的“说出口”小技巧。'],
    scenarios: ['Teams pick their favorite scenario from the jar.'],
    teacherNote: 'Optional: simple certificate or sticker — ritual matters.',
  },
]

export const SESSION_SKELETON = [
  { t: '0–3 min', label: 'Check-in', detail: 'Emoji scale or 1–5 fingers.' },
  { t: '3–8 min', label: 'Warm-up', detail: 'Low-stakes game with turns.' },
  { t: '8–18 min', label: 'Core skill', detail: 'Scenario + 1–2 target phrases.' },
  { t: '18–25 min', label: 'Pairs / small groups', detail: 'Easy scene → harder scene.' },
  { t: '25–30 min', label: 'Close', detail: 'Repeat “golden phrases” + preview next week.' },
]
