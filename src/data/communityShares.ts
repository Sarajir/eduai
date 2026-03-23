/**
 * Curated teacher-contributed links (videos, walkthroughs, slides, etc.).
 * This site is static — we list links only; media stays on YouTube, Bilibili, Drive, etc.
 * Add rows here via pull request, or ask a maintainer after filing a GitHub issue.
 */

export type SharePlatform = 'youtube' | 'bilibili' | 'loom' | 'drive' | 'other'

export type CommunityShare = {
  id: string
  title: { en: string; zh: string }
  contributor: { en: string; zh: string }
  href: string
  platform: SharePlatform
  note?: { en: string; zh: string }
}

export const communityShares: CommunityShare[] = [
  // Example (uncomment and edit after you have a real submission):
  // {
  //   id: '1',
  //   title: { en: 'Week 3 warm-up demo', zh: '第 3 周热身演示' },
  //   contributor: { en: 'Ms. K., Grade 5', zh: 'K 老师，五年级' },
  //   href: 'https://www.youtube.com/watch?v=...',
  //   platform: 'youtube',
  //   note: {
  //     en: '10 min; no student faces on camera.',
  //     zh: '约 10 分钟；画面无学生正脸。',
  //   },
  // },
]
