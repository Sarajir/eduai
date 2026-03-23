/**
 * Rule-based printable pack: "predict → perform → compare" calibration micro-protocol.
 * Grounded in classroom metacognition / calibration research (predictive monitoring).
 */

export type CalibrationInput = {
  cohortLabel: string
  focus: 'math' | 'reading' | 'science' | 'emotion-vocab' | 'mixed'
  gradeBand: '2-4' | '5-6' | '7-8'
  classContext: string
  taskDescription: string
}

const focusLabels: Record<CalibrationInput['focus'], string> = {
  math: 'mathematics / problem solving',
  reading: 'reading comprehension',
  science: 'science reasoning',
  'emotion-vocab': 'naming feelings and reactions',
  mixed: 'a short mixed-skills task',
}

const gradeHints: Record<CalibrationInput['gradeBand'], string> = {
  '2-4': 'Use 1–3 emoji or finger scales; keep language concrete; shorten wait time.',
  '5-6': 'Use a 1–5 scale; invite one-sentence reasons; keep competition low.',
  '7-8': 'Use a 1–5 scale; normalize uncertainty; connect to study strategies.',
}

export function buildCalibrationPack(input: CalibrationInput) {
  const topic = focusLabels[input.focus]
  const gradeHint = gradeHints[input.gradeBand]

  const researchNote =
    'Classroom calibration work often follows three beats: students predict how they will do, attempt a bounded task, then compare the prediction with feedback. Studies in K–12 contexts link predictive monitoring practice to stronger metacognitive awareness (effects vary by context; use your own formative evidence).'

  const facilitatorSteps = [
    {
      title: 'Frame (2 min)',
      body: `Name the goal: we are practicing “calibration”—noticing how close our feelings about performance match what actually happens. Today’s domain: ${topic}. Context you shared: ${input.classContext || '(add your class context)'}.`,
    },
    {
      title: 'Predict (3 min)',
      body: `Before the task, each student privately rates expected success on a 1–5 scale (or your class equivalent). Optional prompt: “What part might trip you up?” Task you will use: ${input.taskDescription || '(write your exact task on the board)'}.`,
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

  const slips = [
    'Before: My confidence (1–5): ___',
    'After: How it really went (1–5): ___',
    'I was: ☐ overconfident ☐ underconfident ☐ about right',
    'One clue I will watch next time: ____________________',
  ]

  return {
    title: `${input.cohortLabel || 'Pilot cohort'} · Calibration micro-session`,
    subtitle: `${topic} · Grades ${input.gradeBand.replace('-', '–')}`,
    researchNote,
    gradeHint,
    facilitatorSteps,
    slips,
    footer:
      'Same-Week Bridge · Calibration Lab · Educational skill practice only · Not assessment therapy or clinical screening.',
  }
}
