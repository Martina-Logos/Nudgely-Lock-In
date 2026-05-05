import { prisma } from '../../lib/prisma'
import { AppError } from '../../middleware/errorHandler'
import { format } from 'date-fns'

// ─── Get all habits ───────────────────────────────────────────────────────────

export async function getAllHabits(userId: string) {
  const habits = await prisma.habit.findMany({
    where:   { userId, isActive: true },
    include: {
      completions: {
        orderBy: { completedAt: 'desc' },
        take:    7,
      },
    },
    orderBy: { createdAt: 'asc' },
  })
  return habits
}

// ─── Create habit ─────────────────────────────────────────────────────────────

export async function createHabit(userId: string, data: {
  name:      string
  emoji?:    string
  type?:     string
  frequency?: string
}) {
  return prisma.habit.create({
    data: {
      userId,
      name:      data.name,
      emoji:     data.emoji     || '✅',
      type:      (data.type     || 'Build')  as any,
      frequency: (data.frequency || 'Daily') as any,
    },
    include: { completions: true },
  })
}

// ─── Complete habit ───────────────────────────────────────────────────────────

export async function completeHabit(userId: string, habitId: string) {
  const habit = await prisma.habit.findFirst({ where: { id: habitId, userId } })
  if (!habit) throw new AppError(404, 'Habit not found.', 'HABIT_NOT_FOUND')

  const today = format(new Date(), 'yyyy-MM-dd')

  // Upsert — safe if already completed today
  try {
    await prisma.habitCompletion.create({
      data: { habitId, date: today },
    })
  } catch {
    // Already completed today — unique constraint violation, ignore
    return prisma.habit.findFirst({
      where:   { id: habitId },
      include: { completions: { take: 7, orderBy: { completedAt: 'desc' } } },
    })
  }

  // Recalculate streak
  const streak = await calculateStreak(habitId)
  const strength = streak >= 21 ? 'High' : streak >= 7 ? 'Moderate' : 'Weak'

  return prisma.habit.update({
    where: { id: habitId },
    data:  {
      streak,
      bestStreak: Math.max(habit.bestStreak, streak),
      strength:   strength as any,
    },
    include: { completions: { take: 7, orderBy: { completedAt: 'desc' } } },
  })
}

// ─── Delete habit ─────────────────────────────────────────────────────────────

export async function deleteHabit(userId: string, habitId: string) {
  const habit = await prisma.habit.findFirst({ where: { id: habitId, userId } })
  if (!habit) throw new AppError(404, 'Habit not found.', 'HABIT_NOT_FOUND')

  // Soft delete
  await prisma.habit.update({ where: { id: habitId }, data: { isActive: false } })
  return { message: 'Habit removed.' }
}

// ─── Internal: calculate streak ───────────────────────────────────────────────

async function calculateStreak(habitId: string): Promise<number> {
  const completions = await prisma.habitCompletion.findMany({
    where:   { habitId },
    orderBy: { date: 'desc' },
    select:  { date: true },
  })

  if (completions.length === 0) return 0

  let streak  = 0
  let current = new Date()
  current.setHours(0, 0, 0, 0)

  for (const completion of completions) {
    const completionDate = new Date(completion.date)
    const diff = Math.round(
      (current.getTime() - completionDate.getTime()) / (1000 * 60 * 60 * 24)
    )

    if (diff === 0 || diff === 1) {
      streak++
      current = completionDate
    } else {
      break
    }
  }

  return streak
}