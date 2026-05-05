import { prisma } from '../../lib/prisma'
import { AppError } from '../../middleware/errorHandler'

// ─── Save profile basics ──────────────────────────────────────────────────────

export async function saveProfile(userId: string, data: {
  displayName: string
  username?:   string
  avatarUrl?:  string
  timezone:    string
  role:        string
}) {
  if (data.username) {
    const taken = await prisma.user.findFirst({
      where: { username: data.username, id: { not: userId } },
    })
    if (taken) throw new AppError(409, 'Username already taken.', 'USERNAME_TAKEN')
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      displayName: data.displayName,
      username:    data.username || null,
      avatarUrl:   data.avatarUrl || null,
      timezone:    data.timezone,
      role:        data.role as any,
    },
  })

  const { passwordHash, ...safe } = user as any
  return safe
}

// ─── Save preferences ─────────────────────────────────────────────────────────

export async function savePreferences(userId: string, data: {
  focusTime:       string
  emotionalState:  string
  distractions:    string[]
  mainGoal:        string
  weeklyGoal:      string
  personalityVibe: string
}) {
  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      focusTime:       data.focusTime as any,
      emotionalState:  data.emotionalState as any,
      distractions:    data.distractions as any,
      mainGoal:        data.mainGoal as any,
      weeklyGoal:      data.weeklyGoal,
      personalityVibe: data.personalityVibe as any,
    },
  })

  const { passwordHash, ...safe } = user as any
  return safe
}

// ─── Save temperament ─────────────────────────────────────────────────────────

const TEMPERAMENT_MAP = ['Sanguine', 'Choleric', 'Melancholic', 'Phlegmatic']

export async function saveTemperament(userId: string, answers: number[]) {
  const counts = [0, 0, 0, 0]
  answers.forEach((a) => { if (a >= 0 && a <= 3) counts[a]++ })
  const maxIdx     = counts.indexOf(Math.max(...counts))
  const temperament = TEMPERAMENT_MAP[maxIdx] as any

  const user = await prisma.user.update({
    where: { id: userId },
    data:  { temperament },
  })

  const { passwordHash, ...safe } = user as any
  return { temperament, user: safe }
}

// ─── Save cognitive results ───────────────────────────────────────────────────

export async function saveCognitive(userId: string, data: {
  iqAnswers: number[]
  eqAnswers: number[]
  sqAnswers: number[]
}) {
  // IQ: correct answers are index 1 for all 3 questions
  const IQ_CORRECT = [1, 1, 1]
  const iqScore = Math.round(
    (data.iqAnswers.filter((a, i) => a === IQ_CORRECT[i]).length / 3) * 100
  )

  // EQ: high EQ answers are index 2 for all 3 questions
  const EQ_HIGH = [2, 1, 2]
  const eqScore = Math.round(
    (data.eqAnswers.filter((a, i) => a === EQ_HIGH[i]).length / 3) * 100
  )

  // SQ: high SQ answers are index 1, 2, 2
  const SQ_HIGH = [1, 2, 2]
  const sqScore = Math.round(
    (data.sqAnswers.filter((a, i) => a === SQ_HIGH[i]).length / 3) * 100
  )

  const user = await prisma.user.update({
    where: { id: userId },
    data:  { iqScore, eqScore, sqScore, isOnboarded: true },
  })

  const { passwordHash, ...safe } = user as any
  return { iqScore, eqScore, sqScore, user: safe }
}