import { prisma } from '../../lib/prisma'

export async function logFocusSession(userId: string, data: {
  taskId?:         string
  durationMinutes: number
  completed?:      boolean
  interrupted?:    boolean
  startedAt:       string
}) {
  return prisma.focusSession.create({
    data: {
      userId,
      taskId:          data.taskId || null,
      durationMinutes: data.durationMinutes,
      completed:       data.completed  ?? true,
      interrupted:     data.interrupted ?? false,
      startedAt:       new Date(data.startedAt),
      completedAt:     new Date(),
    },
  })
}

export async function logMeditationSession(userId: string, data: {
  mode:            string
  durationMinutes: number
  completed?:      boolean
  startedAt:       string
}) {
  return prisma.meditationSession.create({
    data: {
      userId,
      mode:            data.mode as any,
      durationMinutes: data.durationMinutes,
      completed:       data.completed ?? true,
      startedAt:       new Date(data.startedAt),
      completedAt:     new Date(),
    },
  })
}

export async function getTodayFocusMinutes(userId: string): Promise<number> {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const sessions = await prisma.focusSession.findMany({
    where: {
      userId,
      completed:  true,
      startedAt: { gte: today },
    },
    select: { durationMinutes: true },
  })

  return sessions.reduce((sum, s) => sum + s.durationMinutes, 0)
}