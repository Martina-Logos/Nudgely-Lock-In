// src/modules/assistant/context.engine.service.ts
//
// The shared layer. Reads the user's actual data from the database and
// assembles a compact context string. Both the proactive AI and the
// conversation thread inject this as part of their system prompt.
// Keeping it under ~400 tokens so it never dominates the context window.

import { prisma } from '../../lib/prisma'

export async function buildUserContext(userId: string): Promise<string> {
  const today = new Date().toISOString().split('T')[0]

  // Fetch everything in parallel — one round-trip
  const [user, tasks, habits, todayJournal, recentSessions] = await Promise.all([
    prisma.user.findUnique({
      where: { id: userId },
      select: {
        displayName:     true,
        temperament:     true,
        personalityVibe: true,
        iqScore:         true,
        eqScore:         true,
        sqScore:         true,
        focusTime:       true,
        role:            true,
      },
    }),

    prisma.task.findMany({
      where:   { userId, status: { not: 'Done' } },
      orderBy: { createdAt: 'desc' },
      take:    10,
      select:  { title: true, drive: true, status: true, naturalInput: true, createdAt: true },
    }),

    prisma.habit.findMany({
      where:   { userId },
      include: {
        completions: {
          where:   { date: { gte: getDateNDaysAgo(7) } },
          orderBy: { date: 'desc' },
        },
      },
      take: 8,
    }),

    prisma.journalEntry.findFirst({
      where:   { userId, date: today },
      select:  { moodScore: true, sleepQuality: true, text: true, tags: true },
    }),

    prisma.focusSession.findMany({
      where:   { userId, createdAt: { gte: new Date(Date.now() - 7 * 86400000) } },
      orderBy: { createdAt: 'desc' },
      take:    7,
      select:  { durationMinutes: true, completed: true, createdAt: true },
    }),
  ])

  if (!user) return ''

  // ── Mood ─────────────────────────────────────────────────────────────────
  const MOOD_LABELS = ['', 'rough', 'low', 'okay', 'good', 'great']
  const moodLine = todayJournal?.moodScore
    ? `Mood today: ${MOOD_LABELS[todayJournal.moodScore]} (${todayJournal.moodScore}/5)`
    : 'Mood today: not logged'

  // ── Tasks ─────────────────────────────────────────────────────────────────
  const onFire    = tasks.filter(t => t.drive === 'OnFire')
  const stuckList = tasks.filter(t => t.status === 'Stuck')
  const taskLine  = tasks.length === 0
    ? 'No active tasks'
    : `${tasks.length} active task${tasks.length > 1 ? 's' : ''}` +
      (onFire.length    ? `, ${onFire.length} on fire`      : '') +
      (stuckList.length ? `, ${stuckList.length} stuck`     : '')

  const stuckNames = stuckList.slice(0, 2).map(t => `"${t.title}"`).join(', ')
  const topTask    = onFire[0] || tasks[0]

  // ── Habits ────────────────────────────────────────────────────────────────
  const habitsWithStreak = habits.map(h => {
    const completedToday = h.completions.some(c => c.date === today)
    return { name: h.name, streak: h.streak, completedToday }
  })
  const doneHabits    = habitsWithStreak.filter(h => h.completedToday).length
  const highestStreak = Math.max(0, ...habitsWithStreak.map(h => h.streak))
  const habitLine     = habits.length === 0
    ? 'No habits set'
    : `${doneHabits}/${habits.length} habits done today, highest streak ${highestStreak} days`

  // ── Focus ─────────────────────────────────────────────────────────────────
  const totalFocusThisWeek = recentSessions.reduce((s, r) => s + (r.durationMinutes || 0), 0)
  const avgFocus = recentSessions.length
    ? Math.round(totalFocusThisWeek / recentSessions.length)
    : 0
  const focusLine = `Focus this week: ${totalFocusThisWeek} min total, avg ${avgFocus} min/session`

  // ── Cognitive profile ─────────────────────────────────────────────────────
  const cogLine = [
    user.temperament     ? `Temperament: ${user.temperament}` : '',
    user.iqScore != null ? `IQ ${user.iqScore}` : '',
    user.eqScore != null ? `EQ ${user.eqScore}` : '',
    user.sqScore != null ? `SQ ${user.sqScore}` : '',
  ].filter(Boolean).join(', ')

  // ── Assemble ──────────────────────────────────────────────────────────────
  const lines = [
    `User: ${user.displayName}, ${user.role || 'professional'}, ${user.personalityVibe || 'Soft'} mode`,
    cogLine,
    moodLine,
    taskLine,
    topTask ? `Top task: "${topTask.title}" (${topTask.drive})` : '',
    stuckNames ? `Stuck on: ${stuckNames}` : '',
    habitLine,
    focusLine,
    user.focusTime ? `Peak focus time: ${user.focusTime}` : '',
    todayJournal?.sleepQuality ? `Sleep last night: ${todayJournal.sleepQuality}/10` : '',
  ].filter(Boolean)

  return lines.join('\n')
}

// ── Proactive context — lighter version for one-way nudges ────────────────────
export async function buildLightContext(userId: string): Promise<string> {
  const today = new Date().toISOString().split('T')[0]

  const [user, tasks, habits, journal] = await Promise.all([
    prisma.user.findUnique({
      where:  { id: userId },
      select: { displayName: true, temperament: true, personalityVibe: true, focusTime: true },
    }),
    prisma.task.findMany({
      where:   { userId, status: { not: 'Done' } },
      orderBy: { createdAt: 'desc' },
      take:    5,
      select:  { title: true, drive: true, status: true },
    }),
    prisma.habit.findMany({
      where:   { userId },
      include: { completions: { where: { date: today } } },
      take:    5,
    }),
    prisma.journalEntry.findFirst({
      where:  { userId, date: today },
      select: { moodScore: true },
    }),
  ])

  if (!user) return ''

  const stuckTasks = tasks.filter(t => t.status === 'Stuck').map(t => t.title)
  const doneHabits = habits.filter(h => h.completions.length > 0).length
  const MOOD_LABELS = ['', 'rough', 'low', 'okay', 'good', 'great']

  return [
    `User: ${user.displayName}, ${user.temperament || 'unknown temperament'}, ${user.personalityVibe || 'Soft'} mode`,
    journal?.moodScore ? `Mood: ${MOOD_LABELS[journal.moodScore]}` : 'Mood: not logged',
    `Tasks: ${tasks.length} active${stuckTasks.length ? `, stuck on: ${stuckTasks.slice(0, 2).join(', ')}` : ''}`,
    `Habits: ${doneHabits}/${habits.length} done today`,
  ].join('\n')
}

function getDateNDaysAgo(n: number): string {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return d.toISOString().split('T')[0]
}