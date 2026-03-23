/**
 * Printable "two viewpoints" discussion scaffold — supports perspective-taking discourse
 * without generating images (educator reviews all language before use).
 */

export type PerspectiveInput = {
  unitTitle: string
  scenario: string
  gradeBand: '2-4' | '5-6' | '7-8'
  labelA: string
  labelB: string
}

const bandLanguage: Record<PerspectiveInput['gradeBand'], string> = {
  '2-4': 'Use simple sentences; offer sentence stems; act out with toys or role cards.',
  '5-6': 'Use role cards; emphasize curiosity over verdict; avoid public shaming.',
  '7-8': 'Normalize mixed feelings; connect to digital communication and group chats.',
}

export function buildPerspectivePack(input: PerspectiveInput) {
  const scenario = input.scenario.trim() || '(Describe the peer conflict or misunderstanding here.)'

  const discussionQuestions = [
    `What is one fact ${input.labelA} might notice that ${input.labelB} does not emphasize?`,
    `What is one fact ${input.labelB} might notice that ${input.labelA} does not emphasize?`,
    'If both people want the class to feel safe, what is one shared goal they could name?',
    'What is a respectful sentence each side could say to pause the conflict?',
    'Who is a trusted adult or process students can use if feelings stay hot after the talk?',
  ]

  const stems = {
    a: [
      `From ${input.labelA}’s angle, the most important thing happening is…`,
      `${input.labelA} might feel ___ because ___`,
    ],
    b: [
      `From ${input.labelB}’s angle, the most important thing happening is…`,
      `${input.labelB} might feel ___ because ___`,
    ],
  }

  const facilitatorScript = [
    'Read the scenario neutrally. No villain in round one—only perspectives.',
    `Round 1: Small groups only map ${input.labelA}’s view using the stems.`,
    `Round 2: Switch; map ${input.labelB}’s view.`,
    'Round 3: Whole group uses bridge questions. Capture agreements and next steps.',
    'If the scenario touches identity-based harm, escalate to your school protocol—this tool is not a substitute for investigation or counseling.',
  ]

  return {
    title: input.unitTitle || 'Perspective discussion cards',
    scenario,
    bandLanguage: bandLanguage[input.gradeBand],
    labels: { a: input.labelA, b: input.labelB },
    stems,
    discussionQuestions,
    facilitatorScript,
    footer:
      'Same-Week Bridge · Perspective Lab · For facilitated discussion only · Educator-reviewed language',
  }
}
