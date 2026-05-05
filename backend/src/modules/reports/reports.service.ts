import Anthropic from '@anthropic-ai/sdk'
import { prisma } from '../../lib/prisma'
import { env } from '../../config/env'
import { startOfWeek, endOfWeek, eachDayOfInterval, format } from 'date-fns'

const anthropic = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY })

export async function getWeeklyReport(userId: string, weekStartStr?: string) {
  const baseDate  = weekStartStr ? new Date(weekStartStr) : new Date()
  const weekStart = startOfWeek(baseDate, { weekStartsOn: 1 }) // Monday
  const weekEnd   = endOfWeek(baseDate,   { weekStartsOn: 1 }) // Sunday

  // Check cache
  const cached = await prisma.weeklyReport.findUnique({
    where: { userId_weekStart: { userId, weekStart } },
  })
  if (cached) return cached

  // ── Gather raw data ────────────────────────────────────────────────────────

  const days = eachDayOfInterval({ start: weekStart, end: weekEnd })

  // Focus sessions per day
  const focusSessions = await prisma.focusSession.findMany({
    where: { userId, startedAt: { gte: weekStart, lte: weekEnd }, completed: true },
    select: { durationMinutes: true, startedAt: true },
  })

  const dailyFocusData = days.map((day) => ({
    day:     format(day, 'EEE'),
    minutes: focusSessions
      .filter((s) => format(s.startedAt, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'))
      .reduce((sum, s) => sum + s.durationMinutes, 0),
  }))

  const totalFocusMin = dailyFocusData.reduce((sum, d) => sum + d.minutes, 0)

  // Tasks done this week
  const tasksDone = await prisma.task.count({
    where: {
      userId,
      status:      'Done',
      completedAt: { gte: weekStart, lte: weekEnd },
    },
  })

  // Mood trend
  const journalEntries = await prisma.journalEntry.findMany({
    where: { userId, date: { gte: format(weekStart, 'yyyy-MM-dd'), lte: format(weekEnd, 'yyyy-MM-dd') } },
    select: { date: true, moodScore: true },
  })

  const moodTrendData = days.map((day) => {
    const entry = journalEntries.find((e) => e.date === format(day, 'yyyy-MM-dd'))
    return { day: format(day, 'EEE'), score: entry?.moodScore || 0 }
  })

  const moodEntries = moodTrendData.filter((d) => d.score > 0)
  const avgMood     = moodEntries.length
    ? moodEntries.reduce((sum, d) => sum + d.score, 0) / moodEntries.length
    : 0

  // Habit streaks for wins
  const habits = await prisma.habit.findMany({
    where:  { userId, isActive: true, streak: { gt: 0 } },
    select: { name: true, streak: true, emoji: true },
    orderBy: { streak: 'desc' },
    take:   3,
  })

  const wins: string[] = [
    ...habits.map((h) => `${h.emoji} ${h.name} — ${h.streak} day streak`),
    tasksDone > 0 ? `✅ Completed ${tasksDone} task${tasksDone > 1 ? 's' : ''}` : '',
    totalFocusMin > 0 ? `🎯 ${totalFocusMin} minutes of focused work` : '',
  ].filter(Boolean)

  // ── AI summary + tips ──────────────────────────────────────────────────────

  let aiSummary   = ''
  let tips: string[] = []

  try {
    const message = await anthropic.messages.create({
      model:      'claude-sonnet-4-20250514',
      max_tokens: 300,
      messages: [{
        role:    'user',
        content: `You are a supportive ADHD coach. Based on this week's data, write a brief summary and 3 actionable tips.

Data:
- Focus time: ${totalFocusMin} minutes total
- Tasks completed: ${tasksDone}
- Average mood: ${avgMood.toFixed(1)}/5
- Best focus day: ${dailyFocusData.sort((a,b) => b.minutes - a.minutes)[0]?.day || 'N/A'}

Return ONLY valid JSON, no markdown:
{
  "summary": "2-3 sentence summary",
  "tips": ["tip 1", "tip 2", "tip 3"]
}`,
      }],
    })

    const text   = message.content[0].type === 'text' ? message.content[0].text : '{}'
    const parsed = JSON.parse(text.trim())
    aiSummary    = parsed.summary || ''
    tips         = parsed.tips    || []
  } catch {
    aiSummary = `You focused for ${totalFocusMin} minutes and completed ${tasksDone} tasks this week.`
    tips      = [
      'Try shorter tasks on your hardest days.',
      `Your best focus day was ${dailyFocusData.sort((a,b) => b.minutes - a.minutes)[0]?.day || 'this week'}.`,
      'Add more breaks for sustained energy.',
    ]
  }

  // ── Save and return ────────────────────────────────────────────────────────

  return prisma.weeklyReport.create({
    data: {
      userId,
      weekStart,
      weekEnd,
      totalFocusMin,
      tasksDone,
      avgMood,
      dailyFocusData,
      moodTrendData,
      wins,
      tips,
      aiSummary,
    },
  })
}